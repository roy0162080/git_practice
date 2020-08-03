// *{
//   box-sizing: border-box;
//   font-family: sans-serif;
//   margin: 0;
//   padding: 0;
// }
// body{
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #000000;
//
// }
// a
// {
//   display: inline-block;
//   position: relative;
//   padding: 25px 30px;
//   font-size: 28px;
//   text-transform:uppercase;
//   letter-spacing: 3px;
//   text-decoration: none;
//   margin: 40px 10px;
//   overflow: hidden;
//   transition: 0.5s;
//   -webkit-box-reflect: blow 1px linear-gradient(transparent,#0005);
// }
// a:hover{
//   background: #03e9f4;
//   color: #05801;
//   box-shadow: 0px 0px 5px #03e9f4,0px 0px 25px #03e9f4,0px 0px 50px #03e9f4,0px 0px 200px #03e9f4;
// }
// a span {
//   display: block;
//   position: absolute;
// }
// a span:nth-child(1)
// {
//   top: 0;
//   left: -100%;
//   width: 100%;
//   height: 2px;
//   background: linear-gradient(90deg,transparent,#03e9f4);
//   animation: m 1s linear infinite;
// }
// @keyframes m {
//   0%{
//     left: -100%;
//   }
//   50%,100%
//   {
//     left: 100%;
//   }
// }
// a span:nth-child(2)
// {
//   top:-100%;
//   right: 0;
//   width: 2px;
//   height: 100%;
//   background: linear-gradient(180deg,transparent,#03e9f4);
//   animation: n 1s linear infinite;
//   animation-delay: 0.25s;
// }
// @keyframes n {
//   0%{
//     top: -100%;
//   }
//   50%,100%
//   {
//     top: 100%;
//   }
// }
// a span:nth-child(3)
// {
//   right:-100%;
//   bottom: 0;
//   width: 100%;
//   height: 2px;
//   background: linear-gradient(270deg,transparent,#03e9f4);
//   animation: o 1s linear infinite;
//   animation-delay: 0.50s;
// }
// @keyframes o {
//   0%{
//     right: -100%;
//   }
//   50%,100%
//   {
//     right: 100%;
//   }
// }
// a span:nth-child(4)
// {
//   buttom:-100%;
//   left: 0;
//   width: 2px;
//   height: 100%;
//   background: linear-gradient(360deg,transparent,#03e9f4);
//   animation: ani 1s linear infinite;
//   animation-delay: 0.75s;
// }
// @keyframes ani {
//   0%
//   {
//     bottom: -100%;
//   }
//   50%,100%
//   {
//     bottom: 100%;
//   }
// }
// a:nth-child(1)
// {
//   filter: hue-rotate(290deg);
// }
// a:nth-child(2)
// {
//   filter: hue-rotate(110deg);
// }
