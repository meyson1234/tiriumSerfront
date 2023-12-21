

window.addEventListener('DOMContentLoaded',()=>{

  function genereteUid(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    const uid = genereteUid();
    console.log(uid)
    const btn = document.querySelector('#buttonTimer'),
          textStatus = document.getElementById("timer")
          fullObj = document.querySelector('#fullObj');
    let count = 0;


        btn.addEventListener('click',  (e) => {
            e.preventDefault();
          
            const fullObjLocal = document.querySelector('#fullObj');
            const objStri = fullObjLocal.value;
            const t = JSON.parse(objStri);
            
              const b = '"id" : "'+uid+'",' 
              const output = !t.id?[objStri.slice(0, 1), b, objStri.slice(1)].join(''):fullObjLocal.value;


            // console.log(t.waitTime)
            fullObjLocal.value = output;
            
            let time = setTimeout(() => {
             if(!btn.classList.contains('active')){
            console.log(count++)
              if(!btn.classList.contains('active')) console.log(time);
                textStatus.innerText = 'Упал'
                btn.innerText = 'Старт';
                btn.classList.remove('active');
              }
            }, t.waitTime);


        const fetcher = async () => {
            const rawResponse = await fetch('https://kapisoonod.beget.app/api', {
              method: 'POST',
            //   mode: "no-cors", 
              headers: {
                'Content-Type': 'text/plain',
                // 'Content-Type': 'application/json',
            },
              body: JSON.stringify(output)
            });
            const content = await rawResponse;
            console.log(content);
            return content;
          };

          fetcher()
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            if(data.indexOf('Ожидание сброшено.') !== -1) {
                btn.innerText = 'Старт';
                clearTimeout(time);
                // console.log('time')
                btn.classList.remove('active');
            } else {
                btn.innerText = 'Стоп';
                btn.classList.add('active');
            }
            textStatus.innerText = data;
          });
        
            })
})
