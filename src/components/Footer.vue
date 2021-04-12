<template>
    <div class="footer">
        <footer> 
            <div class="itemFooter">
                <div class="items">
                    <ul class="link">
                        <li >Ínicio</li>
                        <li>Sobre</li>
                        <li>Produtos</li>
                        <li>Cursos</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div class="logo">       
                    <img src="~/assets/logo.png" alt="logo"/>
                </div>
                <div class="whatasapp">
                    <strong>Whatasapp</strong> (67) 9 9845-6657
                </div>
            </div>
            <div class="texto">
                <strong>Maria Joana </strong>- Todos os direitos reservados &copy; 2021
            </div>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer{
    background-color: #64743F;

    .texto {
        background-color: #1F2413;
        color: #FFFDFD;
        text-align: center;
    }
    
    .itemFooter{
        background-color: #64743F;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 60px;
        margin-right: 60px;

        .items {
            display: flex;
            flex-direction: column;
            color: #FFFDFD;
        }

        ul{
            li{
                list-style-type: none;
            }
        }

        .logo{
            align-self: center;
            width: 60px;
            height: 60px;
            margin-top: 30px;
        }

        .whatasapp{
            color: #FFFDFD;
            align-self: center;
        }
    }
}

</style>
