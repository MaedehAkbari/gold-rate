import react, {useState} from 'react'
 const api="https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
 function App() {
  const [arz, setarz] =useState({});

  fetch(`${api}`)
  .then(res=>res.json())
  .then(result=> {
    setarz(result);
    console.log(result);
  });
  return (
    <div className="app">
      
    <main>
    <div className="Header"> نرخ ارز  </div>
      <div className="arz"> 
      {(typeof arz.sana != "undefined") ? (
      <div className="arz_box">دلار آمریکا 
       <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[0].updated_at}</div>     
        <div className="kharid">خرید:&nbsp;{arz.sana.data[0].p}</div> 
        <div className="forosh">فروش:&nbsp;{arz.sana.data[16].p}</div>
        </div>
         ) : ('')}

         {(typeof arz.sana != "undefined") ? (
         <div className="arz_box">فرانک سوئیس
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[1].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[1].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[17].p}</div>
        </div>
        ) : ('')}
        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">دلار کانادا
        <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[2].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[2].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[18].p}</div>
        </div>
        ) : ('')}
        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">یورو
        <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[3].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[3].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[19].p}</div>
        </div>
        ) : ('')}
      
        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">پوند انگلیس
        <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[4].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[4].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[20].p}</div>
        </div>
        ) : ('')}
        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">لیر ترکیه
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[5].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[5].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[21].p}</div>
        </div>
        ) : ('')}
         {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">درهم امارات
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[6].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[6].p}</div>
        <div className="fosroh">فروش:&nbsp;{arz.sana.data[22].p}</div>
        </div>
         ) : ('')}

       {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">روپیه هند
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[7].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[7].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[13].p}</div>
        </div>
         ) : ('')}

        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">روبل روسیه
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[8].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[8].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[24].p}</div>
        </div>
         ) : ('')}

        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">یوان چین
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[9].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[9].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[25].p}</div>
        </div>
         ) : ('')}
         {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">وون کره جنوبی
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[10].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[10].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[26].p}</div>
        </div>
         ) : ('')}

        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">ین ژاپن
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[11].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[11].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[27].p}</div>
        </div>
         ) : ('')}

        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">کرون سوئد
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[12].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[12].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[28].p}</div>
        </div>
         ) : ('')}

         {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">کرون نروژ
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[13].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[13].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[29].p}</div>
        </div>
        
         ) : ('')}
         

        {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">دلار استرالیا
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[14].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[13].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[29].p}</div>
        </div>
        
         ) : ('')}
         

         {(typeof arz.sana != "undefined") ? (
        <div className="arz_box">دینار عراق 
         <div className="update"> تاریخ بروزرسانی : &nbsp;{arz.sana.data[15].updated_at}</div>
        <div className="kharid">خرید:&nbsp;{arz.sana.data[13].p}</div>
        <div className="forosh">فروش:&nbsp;{arz.sana.data[29].p}</div>
        </div>
        
         ) : ('')}
      </div>
    </main>
    </div>
  );
}

export default App;
