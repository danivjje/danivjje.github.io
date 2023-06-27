<template>
  <div class="wrapper">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  inset: 0;
  z-index: 1234;
  background-color: rgba(0, 0, 0, 0.08);
}

.lds-ripple {
  display: inline-block;
  position: absolute;
  top: calc(50% - 80px);
  left: calc(50% - 80px);
  width: 160px;
  height: 160px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 144px;
    height: 144px;
    opacity: 0;
  }
}
</style>
