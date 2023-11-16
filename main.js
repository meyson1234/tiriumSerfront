

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
            const b = '"id" : "'+uid+'",' 
            const output = [objStri.slice(0, 1), b, objStri.slice(1)].join('');
            const t = JSON.parse(objStri);
            // console.log(t.waitTime)

            if(!btn.classList.contains('active')){
           const time = setTimeout(() => {
            console.log(count++)
              if(!btn.classList.contains('active')) console.log(time);
                textStatus.innerText = 'Упал'
                btn.innerText = 'Старт';
                btn.classList.remove('active');
            }, t.waitTime);}


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
            return content
          };

          fetcher()
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            if(data.indexOf('Ожидание сброшено.') !== -1) {
                btn.innerText = 'Старт';
                // clearTimeout(time);
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

    // const start = (minuf,textf,urlinputLocf) => {
        
    //     textStatus.innerHTML = "бегает!";
    //     textStatus.style.background = 'burlywood'
        
    //     const minu = isValidIdo(minuf),
    //           text = isValidIdo(textf),
    //           urlinputLoc = isValidIdo(urlinputLocf);
    //     console.log(minuf)
    //     const now = new Date(),
    //           minutes = Math.floor((minu / (1000 * 60)) % 60);
        
    //     // console.log(typeof objStri);

    //         interval =  setInterval(function () {
    //             clearInterval(interval);
                
              
    //             const url = `https://api.telegram.org/bot6447470353:AAEgx88L_vRqPhi6y_edY0Te1S7aSL6k9yQ/sendMessage?chat_id=6377248808&text=Упал Тест: ${text} %0A %0Aдата и время: ${now} %0A %0AУрл на тест: ${urlinputLoc} %0AВремя ожидания прогона: ${minu} млс ${minutes !== 0?'≈ ' + minutes + ' мин':''}`
    //             fetch(url);

    //             textStatus.innerHTML = "провален!";
    //             textStatus.style.background = '#d36a6a';
                
    //             fullObj.removeAttribute('disabled');

    //             btn.classList.remove('active');
    //             btn.innerHTML = 'Старт';
    //         },minu)

    //     }

    // const stop = () => {
    //         clearInterval(interval);
    //         textStatus.innerHTML = "успешно!";
    //         textStatus.style.background = '#2aa568'
    //     }
  // if(!btn.classList.contains('active')){

            //     btn.innerHTML = 'Стоп'
            //     btn.classList.add('active');

            //     const {minu,text,urlinputLoc} = objStri;

            //     start(
            //         minu,
            //         text,
            //         urlinputLoc
            //         );
                
            //         fullObjLocal.setAttribute('disabled',true);
            //         fullObjLocal.value = '';
          
            // } else {
            //     fullObjLocal.value = '';
            //     fullObjLocal.removeAttribute('disabled');

            //     btn.innerHTML = 'Старт'
            //     btn.classList.remove('active');
            //     stop();
            // }


// const string = '{"waitTime" : 300000,"text": "[prod] [entry_points]  smog проверка точки входа из км товара в цыкле","urlinputLoc" :"https://th.yandex-team.ru/test-case/MARKETFRONT-101/edit"}';
// const b = '"id":'+213123214123412+',' 
// var output = [string.slice(0, 1), b, string.slice(1)].join('');
// console.log(output);