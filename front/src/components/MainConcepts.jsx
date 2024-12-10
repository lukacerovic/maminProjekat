import React from 'react'

export default function MainConcepts() {
  return (
    <div className="px-3 flex flex-col lg:flex-row" style={{ gap:"3vw", marginTop:"15vh"}}>
        <div className="concepts w-[70%] lg:h-[40vh] xl:h-[35vh] rounded-[3vw] shadow-xl p-5">
            <p className="text-3xl lg:text-5xl">
                Brzina i Efikasnost
            </p>
            <p className="text-md lg:text-lg pt-3">
            Vaše vreme je dragoceno, zato obezbeđujemo brzu i pouzdanu realizaciju kredita. Naš tim radi efikasno kako biste što pre dobili rešenje koje vam je potrebno.
            </p>
        </div>
        <div className="concepts w-[70%] lg:h-[40vh] xl:h-[35vh] self-end rounded-[3vw] shadow-xl p-5" style={{backgroundColor:"#a29595"}}>
            <p className="text-3xl lg:text-5xl">
                Vaše Potrebe
            </p>
            <p className="text-md lg:text-lg pt-3">
            Svakom klijentu pristupamo individualno i pažljivo biramo uslove koji odgovaraju specifičnim finansijskim potrebama i ciljevima. Naš tim pronalazi optimalne opcije za vaš konkretan slučaj.
            </p>
        </div>
        <div className="concepts w-[70%] lg:h-[40vh] xl:h-[35vh] rounded-[3vw] shadow-xl p-5" style={{backgroundColor:"#6c2636", color:"white"}}>
            <p className="text-3xl lg:text-5xl">
            Sigurnost
            </p>
            <p className="text-md lg:text-lg pt-3">
            Viatec
 je tu da osigura vaš pametan finansijski izbor, vodeći računa o tome da vaš kredit ne ugrozi vašu dugoročnu stabilnost. Pronalazimo rešenja koja su održiva i koja vam pružaju sigurnost u svakom koraku.
            </p>
        </div>
    </div>
  )
}
