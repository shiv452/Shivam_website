
     setInterval(() =>{
     let hours = document.getElementById('hours');
     let minutes = document.getElementById('minutes');
     let seconds = document.getElementById('seconds');
     let ampm = document.getElementById('ampm');


     let hh = document.getElementById('hh');
     let mm = document.getElementById('mm');
     let ss = document.getElementById('ss');

     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();
     let am = h >= 12 ? "PM" : "AM";

     //Convert 24hour clock to 12 hour clock
     if(h > 12){
               h = h - 12;
               }

               //add zero before single digit number
               h = (h < 10) ? "0" + h : h;
               m = (m < 10) ? "0" + m : m;
               s = (s < 10) ? "0" + s : s;


               hours.innerHTML = h + "<br><span>Hr</span>";
               minutes.innerHTML = m + "<br><span>Min</span>";
               seconds.innerHTML = s + "<br><span>Sec</span>";
               ampm.innerHTML = am;  

                    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
                    //12hr
                    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
                    //60min
                    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
                    //60 sec 



                    hr_dot.style.transform = `rotate(${h * 30}deg)`;
                    //360 / 12 = 30

                    min_dot.style.transform = `rotate(${m * 6}deg)`;
                    //360 / 60 = 6

                    sec_dot.style.transform = `rotate(${s * 6}deg)`;
                    //360 / 60 = 6
                    })

