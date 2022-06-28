import styled from 'styled-components'


export const HomePageContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 50px 0;
    background-color: #ffffff;
    border: none;
    display: flex;
    flex-direction: column;
    padding: 50px;
    overflow-x: hidden;


    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 50px 0;
        margin: 0;
        min-height: 100vh;
        box-sizing: border-box;
    }
`

export const HomePageTextContainer = styled.div(({theme}) => `
    
    width: 100%;
    text-align: center;
    margin-bottom: 50px;

    .sign-out{
        width: 80px;
        padding: 8px;
        margin-top: 0;
        margin: 10px auto;
    }

    h1{
        color: ${theme.colors.green};
        font-size: 50px;
        letter-spacing: 15px;

        @media only screen and (max-width: 768px){
        font-size: 40px;
        letter-spacing: 12px;
        }
    }

    p{
        letter-spacing: 5px;
        font-family: 'Roboto', sans-serif;

        @media only screen and (max-width: 768px){
        letter-spacing: 2px;
        }
    }

`)

export const TodoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px;
    /* overflow-y: scroll; */
    

    .unDoneTasks, .doneTasks{
        margin-bottom: 30px;
    }

    .unDoneTasks{
        .empty{
         text-align: center;
         padding: 10px;
         background-color: ${({theme}) => theme.colors.lightGrey};
         font-size: 16px;
         font-weight: bold; 
         color: ${({theme}) => theme.colors.greyFont}; 
        }
    }

    .doneTasks{
        p:first-child{
            letter-spacing: 10px;
            color: ${({theme}) => theme.colors.greyFont};
            font-weight: bold;
            margin-bottom: 10px;

            @media only screen and (max-width: 768px){
                letter-spacing: 5px;
            }
        }
    }

   
    
`

export const ImageBox = styled.div`
    background-image: ${({imgUrl}) => `url(${imgUrl})`};
    width: 400px;
    height: 400px;
    background-size: cover;
    background-position: center;
    padding: 10px;
    opacity: 0.5;
    margin: auto;

    @media only screen and (max-width: 768px){
        width: 200px;
        height: 200px;

    }
`

export const ShortLine = styled.hr`
    width: 70px;
    background-color: black;
    margin: auto;
    height: 3px;
    margin-bottom: 10px;

`

export const LongLine = styled(ShortLine)`
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.greyFont};
    margin-bottom: 30px;
`