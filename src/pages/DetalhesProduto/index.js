import React from "react";
import {Grid, Card} from "@mui/material";
import { useParams } from "react-router-dom";

import bone01 from "./img/bone01.jpg";
import bone02 from "./img/bone02.jpg";
import bone03 from "./img/bone03.jpg";
import bone04 from "./img/bone04.jpg";
import bone05 from "./img/bone05.jpg";

import { Stack } from "@mui/system";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function DetalhesProduto() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);

    const imagens = [
        bone01,
        bone02,
        bone03,
        bone04,
        bone05,
    ];


    const Items = () => {
        return imagens.map((cada, posicao) => {
            return(
                <Grid item xs={2.4}>
                    <Card align="center" onClick={ () => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid red"}}>
                        <img src={cada} width="100%"/>
                    </Card>
                </Grid>
            )
        }); // <Items />
    }

    function anterior(){
        if(atual == 0){
            setAtual(imagens.length - 1);
        } else {
            setAtual(atual - 1);
        }
    }

    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual + 1);
        } else {
            setAtual(0)
        }
    }

    return (
        <div>
            Detalhes do Produto {id}
                
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <Card align="center">
                            <Stack direction="row" sx={{justifyContent: "space-between"}}>
                                <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior} />
                                <img width="400px" src={imagens[atual]}/>
                                <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />
                            </Stack>
                        </Card>

                        <Grid container spacing={2}>
                                <Items />
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        informacoes
                    </Grid>
                </Grid>

        </div>
    )
}
