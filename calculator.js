         const body = document.querySelector('.here')
         const calculatrice = `
         <main>
         <table border="1"> 
            <tr> 
               <td colspan="3"><input id="output"/></td>
               <td><button onclick="effacer()">C</button></td>
            </tr>
            <tr> 
               <td><button onclick="afficher('1')">1</button></td> 
               <td><button onclick="afficher('2')">2</button></td> 
               <td><button onclick="afficher('3')">3</button></td> 
               <td><button onclick="afficher('+')">+</button></td> 
            </tr> 
            <tr> 
               <td><button onclick="afficher('4')">4</button></td> 
               <td><button onclick="afficher('5')">5</button></td> 
               <td><button onclick="afficher('6')">6</button></td> 
               <td><button onclick="afficher('-')">-</button></td> 
            </tr> 
            <tr> 
               <td><button onclick="afficher('7')">7</button></td> 
               <td><button onclick="afficher('8')">8</button></td> 
               <td><button onclick="afficher('9')">9</button></td> 
               <td><button onclick="afficher('*')"> * </button></td> 
            </tr> 
            <tr>
               <td><button onclick="afficher('.')">.</button></td> 
               <td><button onclick="afficher('0')">0</button></td> 
               <td><button onclick="calculer()">=</button></td> 
               <td><button onclick="afficher('/')">/</button></td> 
            </tr> 
         </table> 
         </main>
         `;
         body.insertAdjacentHTML("afterbegin", calculatrice);
         //fonction qui évalue le chiffre et renvoie la sortie
         function computeResult(strs){
            return Function('return ' + strs)()
          }
         function calculer() 
         { 
             let a = document.getElementById("output").value 
             let b = computeResult(a) 
             document.getElementById("output").value = b 
         } 
         //fonction qui affiche la valeur
         function afficher(val) 
         { 
             document.getElementById("output").value+=val 
         } 
         //fonction qui efface l'écran 
         function effacer() 
         { 
             document.getElementById("output").value = "" 
         } 