let items=document.getElementsByClassName("item");
items=Array.from(items);
let hide=document.getElementsByClassName("hide");
let btn=document.getElementById("btn");
hide=Array.from(hide);
let apiKey='AIzaSyBya4wJ6d3TkAQ9Sa3POk4X607QIzxEeXc';
let play=document.getElementById("play");
let chome=document.getElementById("chome");
let cpunjabi=document.getElementById("cpunjabi");
let cnewt=document.getElementById("cnewt");
let ctmock=document.getElementById("ctmock");
let cmovie=document.getElementById("cmovie");
let ccartoon=document.getElementById("ccartoon");
let cbhajan=document.getElementById("cbhajan");
let insertname=document.getElementById("insertname");
insertname.innerText=localStorage.getItem("myname");
let insertemail=document.getElementById("insertemail");
insertemail.innerText=localStorage.getItem("email");
async function run(apiurl){
	try {
		const response = await fetch(apiurl);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}
async function calling(val,index){
    items[index].setAttribute("v-id",val.id);
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${val.id}&key=${apiKey}`;
    let res=await run(url);
    let img=document.createElement("img");
    img.setAttribute("src",res.items[0].snippet.thumbnails.medium.url);
    let content=document.createElement("div");
    let h3=document.createElement("h3");
    h3.innerText=res.items[0].snippet.title;
    let p=document.createElement("p");
    p.innerHTML=`&check; &nbsp;${res.items[0].snippet.channelTitle}`;
    content.appendChild(h3);
    content.appendChild(p);
    items[index].appendChild(img);
    items[index].appendChild(content);
}
let punjabi=[
    {
        des:"judge",
        id:"wujewK7E0dc",
        href:"https://www.youtube.com/embed/wujewK7E0dc?si=JNgsYy_WUohCerXz"
    },
    {
        des:"vail",
        id:"KP_A2ooJIYI",
        href:"https://www.youtube.com/embed/KP_A2ooJIYI?si=JSBwGdt_a7t4YJCV"
    },
    {
        des:"college",
        id:"c7qie6Fg-IQ",
        href:"https://www.youtube.com/embed/c7qie6Fg-IQ?si=OwTcKkNRoN4TbSg2"
    },
    {
        des:"churi",
        id:"E4OY80A_6tk",
        href:"https://www.youtube.com/embed/E4OY80A_6tk?si=uukzFBpFF3nVgs9t"
    },
    {
        des:"kinna pyaar",
        id:"IaeLD8bbZFo",
        href:"https://www.youtube.com/embed/IaeLD8bbZFo?si=QCd0bS2rGrIruaw9"
    },
    {
        des:"fer ohi hoya",
        id:"u6fvF1HRCFM",
        href:"https://www.youtube.com/embed/u6fvF1HRCFM?si=fNXXHVtY4URu3-eA"
    },
    {
        des:"cute munda",
        id:"PDlw1Tn-PVk",
        href:"https://www.youtube.com/embed/PDlw1Tn-PVk?si=hf6XvZ-tIckH3h7e"

    },
    {
        des:"tere to begair",
        id:"N6no6NFtTJA",
        href:"https://www.youtube.com/embed/N6no6NFtTJA?si=7aTPXLgst-F52ZdN"

    },
    {
        des:"same time",
        id:"HC172grgTwU",
        href:"https://www.youtube.com/embed/HC172grgTwU?si=vnEiUWWRq8zTJViT"

    }
    
];
let newt=[
    {
        des:"portfolio",
        id:"ldwlOzRvYOU",
        href:"https://www.youtube.com/embed/ldwlOzRvYOU?si=fZpqaKQ3X28cq-_X"
    },
    {
        des:"roadmap web dev",
        id:"z0n1aQ3IxWI",
        href:"https://www.youtube.com/embed/z0n1aQ3IxWI?si=5dlK-bBA5oSridpf"
    },
    {
        des:"react-app",
        id:"gDUzaANQ01A",
        href:"https://www.youtube.com/embed/gDUzaANQ01A?si=OVzGgEQqV7MKWj5N"
    },
    {
        des:"git-github",
        id:"Ez8F0nW6S-w",
        href:"https://www.youtube.com/embed/Ez8F0nW6S-w?si=Q_Q4R159snaqMB3z"
    },
    {
        des:"chat-gpt",
        id:"wLk2xRzhbjk",
        href:"https://www.youtube.com/embed/wLk2xRzhbjk?si=e2R9MHcB2UuHZrmQ"
    },
    {
        des:"front-end projects",
        id:"2SXno61FX2k",
        href:"https://www.youtube.com/embed/2SXno61FX2k?si=IPUxAuXENmD1-rr4"
    },
    {
        des:"python",
        id:"fqF9M92jzUo",
        href:"https://www.youtube.com/embed/fqF9M92jzUo?si=2g-KLbulgBgkgAJu"
    },
    {
        des:"ai-ml",
        id:"C6YtPJxNULA",
        href:"https://www.youtube.com/embed/C6YtPJxNULA?si=LhW2yA3a1j7kMQnF"
    },
    {
        des:"api",
        id:"XGa4onZP66Q",
        href:"https://www.youtube.com/embed/XGa4onZP66Q?si=QhgeP4B67jQV2Mxu"
    }
];
let tmock=[
    {
        des:"e1",
        id:"4qlScPdIoio",
        href:"https://www.youtube.com/embed/4qlScPdIoio?si=Pr4rdwsYTV-EHHeH"
    },
    {
        des:"e2",
        id:"8N9914dY1uo",
        href:"https://www.youtube.com/embed/8N9914dY1uo?si=wL9ZP_td4tjIhcXo"
    },
    {
        des:"e3",
        id:"i_Y9vXWKwXU",
        href:"https://www.youtube.com/embed/i_Y9vXWKwXU?si=lWvDGp4oY6DsHrkZ"
    },
    {
        des:"e4",
        id:"UKDO8S_kiTA",
        href:"https://www.youtube.com/embed/UKDO8S_kiTA?si=cjdzd3GOuIeb5Zpk"
    },
    {
        des:"e5",
        id:"4y-kG8ZKEqk",
        href:"https://www.youtube.com/embed/4y-kG8ZKEqk?si=iMWe_51d2lEyU7X3"
    },
    {
        des:"e6",
        id:"kvc9IDE5JOo",
        href:"https://www.youtube.com/embed/kvc9IDE5JOo?si=VUjyrSgEnSXGMpRT"
    },
    {
        des:"e7",
        id:"fFYeGivYB_o",
        href:"https://www.youtube.com/embed/fFYeGivYB_o?si=YnnuWLe7Gix8d9bI"
    },
    {
        des:"e8",
        id:"QX8S5UhVIjM",
        href:"https://www.youtube.com/embed/QX8S5UhVIjM?si=1_NYXB_BpoFHHPQn"
    },
    {
        des:"e9",
        id:"znwsEpffbgU",
        href:"https://www.youtube.com/embed/znwsEpffbgU?si=pS3XLR27qWz8tRaj"
    }
];
let movie=[
    {
        des:"surranoidu",
        id:"B6h-kQLQqec",
        href:"https://www.youtube.com/embed/B6h-kQLQqec?si=RWLRNE8Ro6knETJS"
    },
    {
        des:"punjabi movie",
        id:"bV6ft-NSpKQ",
        href:"https://www.youtube.com/embed/bV6ft-NSpKQ?si=PmDwqlwITimqrWZ"
    },
    {
        des:"south movie",
        id:"kJgWpBuOx2w",
        href:"https://www.youtube.com/embed/kJgWpBuOx2w?si=dUcMHJpeb5rqd1HV"
    },
    {
        des:"check",
        id:"NpJ6lnbgi_s",
        href:"https://www.youtube.com/embed/NpJ6lnbgi_s?si=ZJkfGcPbqWzWFAuH"
    },
    {
        des:"atkhan chatkhan",
        id:"u3De51E5raY",
        href:"https://www.youtube.com/embed/u3De51E5raY?si=Ln5LMdo2M2mvOQ-N"
    },
    {
        des:"punjabi movie",
        id:"W69n-_CONM0",
        href:"https://www.youtube.com/embed/W69n-_CONM0?si=qGuhH2yCnzklt-3R"
    },
    {
        des:"zidd",
        id:"rppeSnJCdFA",
        href:"https://www.youtube.com/embed/rppeSnJCdFA?si=dLUfkLlwkPb84CJj"
    },
    {
        des:"geeta madam",
        id:"krCpn6RrNX8",
        href:"https://www.youtube.com/embed/krCpn6RrNX8?si=Oh4QRksi3hnUNtel"
    },
    {
        des:"fufad ji",
        id:"zc3BkcZMG18",
        href:"https://www.youtube.com/embed/zc3BkcZMG18?si=kZO220FjEIPiisrK"
    }
];
let cartoon=[
    {
        des:"oogy",
        id:"jgwMwkyQz5A",
        href:"https://www.youtube.com/embed/jgwMwkyQz5A?si=Kb2z-42rSv01rEFv"
    },
    {
        des:"chota bheem",
        id:"cqya9HC8eL0",
        href:"https://www.youtube.com/embed/cqya9HC8eL0?si=M2u798U980QAxOeb"
    },
    {
        des:"motu patlu",
        id:"LiJT7c9KxY0",
        href:"https://www.youtube.com/embed/LiJT7c9KxY0?si=R6-L6z_8rxbua-Na"
    },
    {
        des:"tom and jeery",
        id:"5oH9Nr3bKfw",
        href:"https://www.youtube.com/embed/5oH9Nr3bKfw?si=l6tfbKvcpDDjvNMD"
    },
    {
        des:"mogly",
        id:"3FryFG-D6Z8",
        href:"https://www.youtube.com/embed/3FryFG-D6Z8?si=AlEoDw7klZG77OfZ"
    },
    {
        des:"motu patlu 2",
        id:"NDTkqOHOn6A",
        href:"https://www.youtube.com/embed/NDTkqOHOn6A?si=uryfle_IIjdFlpD1"
    },
    {
        des:"tom and jeery 2",
        id:"AGBjI0x9VbM",
        href:"https://www.youtube.com/embed/AGBjI0x9VbM?si=4rK4-4dMietQqYHE"
    },
    {
        des:"motu patlu",
        id:"N1_EnQENoJ8",
        href:"https://www.youtube.com/embed/N1_EnQENoJ8?si=fTivMZh_3eUddRNm"
    },
    {
        des:"chota bheem",
        id:"woHS3vemcW4",
        href:"https://www.youtube.com/embed/woHS3vemcW4?si=hDesRYf9YkaEO7DZ"
    }
];
let bhajan=[
    {
        des:"meri vinti yahi hai radha rani",
        id:"S-Fucuw7NKs",
        href:"https://www.youtube.com/embed/S-Fucuw7NKs?si=nR1WI4HklHxgbS9x"
    },
    {
        des:"mujhe rash aa gaya hai",
        id:"e2uWSGI_8BU",
        href:"https://www.youtube.com/embed/e2uWSGI_8BU?si=tqxz_ZTARO5Q0zKh"
    },
    {
        des:"mera aapki kripa se",
        id:"8ryq_SOKEjg",
        href:"https://www.youtube.com/embed/8ryq_SOKEjg?si=f2Wt4up508Fc2Flf"
    },
    {
        des:"duniya ka bankar dekh liya",
        id:"yrfXFNqYWNI",
        href:"https://www.youtube.com/embed/yrfXFNqYWNI?si=p83Ne5e_1aW38kpJ"
    },
    {
        des:"kali kamli",
        id:"9Dv7gzfaOro",
        href:"https://www.youtube.com/embed/9Dv7gzfaOro?si=Hhdm5o2LEerDJ9-2"
    },
    {
        des:"lagan tumse lga baithe",
        id:"2f5r2c6EiBE",
        href:"https://www.youtube.com/embed/2f5r2c6EiBE?si=LhOn6VU8h2MPchR3"
    },
    {
        des:"vrindavan ki en kunj galin mein",
        id:"Tr5qVrsqQjE",
        href:"https://www.youtube.com/embed/Tr5qVrsqQjE?si=xm3PTHDeFt8B0P_2"
    },
    {
        des:"naam meri radha rani ka",
        id:"ytNmjJ_Wb3A",
        href:"https://www.youtube.com/embed/ytNmjJ_Wb3A?si=O58BkHBqIIctaFZA"
    },
    {
        des:"shukriya",
        id:"6xVL8E6RWiY",
        href:"https://www.youtube.com/embed/6xVL8E6RWiY?si=UGW7Q3WEWYwPhphh"
    }
];
let home=[
    {
        des:"shukriya",
        id:"6xVL8E6RWiY",
        href:"https://www.youtube.com/embed/6xVL8E6RWiY?si=UGW7Q3WEWYwPhphh"
    },
    {
        des:"motu patlu",
        id:"N1_EnQENoJ8",
        href:"https://www.youtube.com/embed/N1_EnQENoJ8?si=fTivMZh_3eUddRNm"
    },
    {
        des:"check",
        id:"NpJ6lnbgi_s",
        href:"https://www.youtube.com/embed/NpJ6lnbgi_s?si=ZJkfGcPbqWzWFAuH"
    },
    {
        des:"api",
        id:"XGa4onZP66Q",
        href:"https://www.youtube.com/embed/XGa4onZP66Q?si=QhgeP4B67jQV2Mxu"
    },
    {
        des:"vail",
        id:"KP_A2ooJIYI",
        href:"https://www.youtube.com/embed/KP_A2ooJIYI?si=JSBwGdt_a7t4YJCV"
    },
    {
        des:"same time",
        id:"HC172grgTwU",
        href:"https://www.youtube.com/embed/HC172grgTwU?si=vnEiUWWRq8zTJViT"

    },
    {
        des:"fufad ji",
        id:"zc3BkcZMG18",
        href:"https://www.youtube.com/embed/zc3BkcZMG18?si=kZO220FjEIPiisrK"
    },
    {
        des:"roadmap web dev",
        id:"z0n1aQ3IxWI",
        href:"https://www.youtube.com/embed/z0n1aQ3IxWI?si=5dlK-bBA5oSridpf"
    },
    {
        des:"e9",
        id:"znwsEpffbgU",
        href:"https://www.youtube.com/embed/znwsEpffbgU?si=pS3XLR27qWz8tRaj"
    }

];
chome.classList.add("selected");
home.forEach(calling);
items.forEach((value,index)=>{
    value.addEventListener("click",()=>{
        let vid=value.getAttribute("v-id");
        let src=null;
            home.forEach((val,ind)=>{
                if(val.id == vid){
                    src=val.href;
                }

            });
        play.setAttribute("src",src);
    })
});
btn.addEventListener("click",()=>{
	hide.forEach((value,index)=>{
		value.style.display="flex";
	});
	btn.style.display="none";
});

    chome.addEventListener("click",()=>{
        chome.classList.add("selected");
        cpunjabi.classList.remove("selected");
        cnewt.classList.remove("selected");
        ctmock.classList.remove("selected");
        cmovie.classList.remove("selected");
        ccartoon.classList.remove("selected");
        cbhajan.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        home.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    home.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
    cpunjabi.addEventListener("click",()=>{
        cpunjabi.classList.add("selected");
        chome.classList.remove("selected");
        cnewt.classList.remove("selected");
        ctmock.classList.remove("selected");
        cmovie.classList.remove("selected");
        ccartoon.classList.remove("selected");
        cbhajan.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        punjabi.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    punjabi.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
    cnewt.addEventListener("click",()=>{
        cnewt.classList.add("selected");
        chome.classList.remove("selected");
        cpunjabi.classList.remove("selected");
        ctmock.classList.remove("selected");
        cmovie.classList.remove("selected");
        ccartoon.classList.remove("selected");
        cbhajan.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        newt.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    newt.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
    ctmock.addEventListener("click",()=>{
        ctmock.classList.add("selected");
        chome.classList.remove("selected");
        cpunjabi.classList.remove("selected");
        cnewt.classList.remove("selected");
        cmovie.classList.remove("selected");
        ccartoon.classList.remove("selected");
        cbhajan.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        tmock.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    tmock.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
    cmovie.addEventListener("click",()=>{
        cmovie.classList.add("selected");
        chome.classList.remove("selected");
        cpunjabi.classList.remove("selected");
        cnewt.classList.remove("selected");
        ctmock.classList.remove("selected");
        ccartoon.classList.remove("selected");
        cbhajan.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        movie.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    movie.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
    ccartoon.addEventListener("click",()=>{
        ccartoon.classList.add("selected");
        chome.classList.remove("selected");
        cpunjabi.classList.remove("selected");
        cnewt.classList.remove("selected");
        ctmock.classList.remove("selected");
        cmovie.classList.remove("selected");
        cbhajan.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        cartoon.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    cartoon.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
    cbhajan.addEventListener("click",()=>{
        cbhajan.classList.add("selected");
        chome.classList.remove("selected");
        cpunjabi.classList.remove("selected");
        cnewt.classList.remove("selected");
        ctmock.classList.remove("selected");
        cmovie.classList.remove("selected");
        ccartoon.classList.remove("selected");
        hide.forEach((value,index)=>{
            value.style.display="none";
        });
        btn.style.display="inline-block";
        items.forEach((v,i)=>{
            v.innerHTML="";
        });
        bhajan.forEach(calling);
        items.forEach((value,index)=>{
            value.addEventListener("click",()=>{
                let vid=value.getAttribute("v-id");
                let src=null;
                    bhajan.forEach((val,ind)=>{
                        if(val.id == vid){
                            src=val.href;
                        }
        
                    });
                play.setAttribute("src",src);
            })
        });
    });
