
const barlabels =[
'Jan 01', '02 Jan', '03 Jan' ,  '04 Jan' , '05 Jan' , '06 Jan' , '07 Jan' , '08 Jan' , '09 Jan' , '10 Jan' , '11 Jan' , '12 Jan'
];
const linelabel =['Jan 01', '02 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '11 Jan', '12 Jan',];

const dataItems =[
420, 500,  410, 670, 210, 405, 200, 370, 710, 370, 350, 180
];
const linedata=[ 380, 640, 420, 610, 380, 240, 450,380, 390, 196, 240];

const data ={
    labels: barlabels,

    datasets: [{
        data: dataItems,
        backgroundColor: 'rgb(81, 9, 90)', 
        type:'bar',
        Order:1
    },{
        data: linedata,
        backgroundColor: 'rgba(255, 26, 104, 0.2)', 
       borderWidth:5,
        
        type:'line',
        Order: 0
        
    }]
    
};
const config ={
    data: data,
    options: {
        plugins: {
            legend:{
                display: false
            },
            title: {
                display: true,
                text: 'Barchart'

            }
        }
        

    }
    
};
const chart = new Chart(
    document.getElementById('barchartcanvas'),
    config
);



//radar chart

radarlabel =['Jan', 'Feb', 'March', 'April', 'May', 'June']
const saledata =[80, 50, 32, 45, 100, 20];
const incomedata =[20, 30, 34, 85, 20, 85];
const expensedata =[42, 75, 77, 15, 45, 10];

const radardata ={
    labels: radarlabel,

    datasets: [{
        data: saledata,
        backgroundColor: 'rgb(81, 9, 90)', 
        type:'Radar',
        Order:1
    },{
        data: linedata,
        backgroundColor: 'rgba(255, 26, 104, 0.2)', 
       borderWidth:5,
        
        type:'line',
        Order: 0
        
    }]
    
};





const configs ={
    data: radardata,
    options: {
        plugins: {
            legend:{
                display: false
            },
            title: {
                display: true,
                text: 'radarchart'
            }
        }       
    }    
};

const Radarchart = new Chart('radar', {
    type: 'radar'
}
  
);

const radar = document.getElementById('canvasRadarchart');
   




