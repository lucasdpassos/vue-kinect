<template>
<kinesis-container class="container">
    <kinesis-element :strength="20" type="depth" class="card">
        <div class="sneaker">
            <div class="circle"></div>
            <img src="../assets/codepacklogo.png" alt="build" class="wolf1">
        </div>
        <div class="info">
            <h1 class="title">Apartamentos no Leblon</h1>
            <h3>Lindos apartamentos decorados, localizados no centro do Leblon, próximos a mercados, escolas, serviços públicos, ponto de ônibus na porta</h3>

        </div>
    </kinesis-element>
</kinesis-container>
</template>

<script>
export default {
    //
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;

}

.container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    transform-style: preserve-3d;
    background-color: rgba(255, 255, 255, 0.9);
    min-height: 80vh;
    width: 35rem;
    border-radius: 30px;
    padding: 0rem 5rem;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
}

.sneaker {
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sneaker img {
    width: 20rem;
    z-index: 2;
    transition: all 0.75s ease-out;
}

.circle {
    width: 25rem;
    height: 20rem;
    background: linear-gradient(to right,
            rgba(3, 255, 234, 0.75),
            rgba(1, 207, 70, 0.842));
    position: absolute;
    border-radius: 50%;
    z-index: 1;
}

.info h1 {
    font-size: 10rem;
    transition: all 0.75s ease-out;
    background-color: crimson;
    text-align: center;
}

.info h3 {
    font-size: 28px;
    padding: 2rem 0rem;
    color: #000000;
    font-weight: lighter;
    transition: all 0.75s ease-out;
    background-color: rgb(228, 228, 228);
}

.sizes {
    display: flex;
    justify-content: space-between;
    transition: all 0.75s ease-out;
}

.sizes button {
    padding: 0.5rem 2rem;
    background: none;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    color: #585858;
}

button.active {
    background: #585858;
    color: white;
}

.purchase {
    margin-top: 5rem;
    margin-bottom: 3rem;
    transition: all 0.75s ease-out;
}

.purchase button {
    width: 100%;
    padding: 1rem 0rem;
    background: #229e41;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    font-weight: bolder;
}
</style>
