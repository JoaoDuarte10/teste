const receitas = [
    {
        "title": "Arroz de Mariscos para 2 pessoas",
        "description": "Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com pimentões e cebola juliene, temperos e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.",
        "ingredientes": ["1 cebola", "2 dentes de alho", "3 colheres de sopa de Azeite", "4 tomates", "2 Pitadas de Sal", "1 embalagem de marisco (mistura)",
                        "1 embalagem de camarão inteiro congelado", "1 chávena de arroz", "1 porção de coentros"],
        "tempoPreparo": "25 minutos",
        "modoDePreparo": ["Faça um refogado com o azeite a cebola e os dentes de alho bem picados. Esmague os tomates maduros sem pele e junte ao refogado. Tempere com sal. Deixe 'namorar' durante alguns minutos.", 
                        "Deixe a descongelar a embalagem de cocktail de marisco e delícias do mar, retire-as também do congelador e ponha-as de parte.",
                        "Junte os mariscos (as delícias ficam para mais tarde) ao refogado e mexa. Com o lume brando, tape o tacho e deixe 'namorar' durante 15 minutos.",
                        "Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar.",
                        "Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.",
                        "Depois temos o Arroz de Marisco Tradicional que leva todo o tipo marisco, desde sapateira, lagosta, mexilhões e etc."]
    },
    {
        "title": "Moqueca Tropical",
        "description": "Escolha entre Camarão ou Peixe ou a combinação dos dois | De origem indígena. A moqueca é um cozido de peixe ou camarão ou com mistura de peixe e camarão com tomate, cebola, pimentões e cheiro-verde refogados. Leve toque de azeite de dendê e leite de coco natural. Na versão tropical, acrescentamos manga e abacaxi. Acompanha arroz branco, pirão de camarão e farofa de dendê",
        "ingredientes": ["2 kg de robalo cortado em postas com couro", "4 cebolas grandes", "1 cabeça de alho", "4 tomates grandes", "Farinha de mandioca",
                    "100ml de azeite de dendê", "2 pimentões vermelhos", "Sal (à gosto)", "Pimenta do reino a gosto", "Espinhas e cabeça do robalo",
                    "4 bananas em fatias", "1kg de camarão descascado"],
        "tempoPreparo": "40 minutos",
        "modoDePreparo": ["Prepare o caldo de peixe com as espinhas e cabeça.", "Acrescente cebola, pimentão, tomate, alho, sal e pimenta ao caldo até apurar.",
                        "Coloque as bananas por baixo da terrine, intercale com o molho e o peixe.", "Tempere com sal e pimenta.", "Cubra com o molho já com o camarão.",
                        "Leve ao forno por 20 minutos."]
    },
    {
        "title": "Frutos do Mar ao Azeite de Ervas",
        "description": "Para apreciadores de frutos do mar, com leve aroma de azeite de ervas finas. Mexilhões, polvo, peixe, camarão e lula salteados com azeite, champignon, cebola picada,pimentão, alho, alcaparras e brócolis. Servidos com arroz de brócolis e legumes salteados",
        "ingredientes": ["250 gr fettuccine", "250 gr lula", "6 unidades de vieira", "6 unidades de camarão rosa", "60 gr vôngole", "100 gr tomate cereja",
                    "100 gr mini-abobrinha", "200 ml azeite de oliva alecrim a gosto", "1 maço de tomilho", "1 maço de manjericão", "30 gr manteiga"],
        "tempoPreparo": "30 minutos",
        "modoDePreparo": ["Junte todas as ervas e pique muito bem com a faca. Some a 150 ml de azeite e deixe", "Limpe as lulas, descartando as nadadeiras e a pele, e guardando os corpos e as cabeças.",
                        "Encha de água uma panela grande e leve ao fogo alto até ferver.", "Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar.",
                        "Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.",
                        "Selar os camarões, repita o processo com a lula e acabou!"]
    },
    {
        "title": "Massa espaguete à Italiana",
        "description": "Espaguete italiano coberto com mexilhões, lula, polvo, camarões, salteados no azeite com alho, cebola, molho de tomates frescos e manjericão.",
        "ingredientes": ["200 gr Espaguete", "6 unidades de vieira", "6 unidades de camarão rosa", "60 gr vôngole", "300 gr tomate cereja",
                        "200 ml azeite de oliva alecrim a gosto", "1 maço de tomilho", "30 gr manteiga"],
        "tempoPreparo": "18 minutos",
        "modoDePreparo": ["Cozinhe o macarrão em água fervente e sal, até que fique al dente", "Enquanto isso, em uma panela, aqueça o azeite, adicione os tomates, os sticks e refogue ligeiramente",
                        "Junte o manjericão e misture", "Escorra o macarrão, coloque em um recipiente e adicione o refogado de tomates", 
                        "Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.", "Polvilhe o queijo ralado e sirva a seguir"]
    },
    {
        "title": "Bobó de Lagosta",
        "description": "De origem indígena com toques cearenses. Esta moqueca de lagosta é feita com verduras refogadas acrescidas de leite de coco, azeite de dendê e coentro. Acompanha arroz branco, pirão de camarão e farofa de dendê",
        "ingredientes": ["1 kg de camarão fresco", "sal a gosto", "3 dentes de alho picados e amassados", "suco de 1 limão", "pimenta-do-reino",
                    "1 kg de mandioca (prefira as que já vem embaladas e descascadas, é mais prático)", "3 cebolas (1 cortada em rodelas e 2 raladas)",
                    "1 folha de louro", "6 colheres (sopa) de azeite de oliva", "2 vidros de leite de coco", "1 maço de cheiro-verde picado",
                    "2 latas de molho pronto de tomate (pomarola)", "2 latas de molho pronto de tomate (pomarola)", "2 colheres (sopa) de azeite de dendê"],
        "tempoPreparo": "50 minutos",
        "modoDePreparo": ["Lave os camarões e tempere com sal, alho, pimenta e limão, deixe marinar", "Pegue uma panela com água e cozinhe a mandioca em pedacinhos, com louro e a cebola em rodelas. Quando estiver mole, acrescente um vidro de leite de coco",
                    "Deixe esfriar um pouco e bata no liquidificador Esquente o azeite de oliva, junte a cebola ralada e deixe dourar", "Acrescente os camarões e frite",
                    "Adicione as 2 latas de pomarola, o cheiro-verde, o pimentão e deixe cozinhar por alguns minutos", "Junte na mesma panela, a mandioca batida no liquidificador, outro vidro de leite de coco e o azeite de dendê. Deixe levantar fervura e está pronto."]
    }
]

export { receitas }