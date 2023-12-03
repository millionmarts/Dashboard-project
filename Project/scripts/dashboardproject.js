
const barlabels =[
    'Jan 01', '02 Jan', '03 Jan' ,  '04 Jan' , '05 Jan' , '06 Jan' , '07 Jan' , '08 Jan' , '09 Jan' , '10 Jan' , '11 Jan' , '12 Jan'
    ];
    const linelabel =['Jan 01', '02 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '11 Jan', '12 Jan',];
    
    const dataItems =[
    420, 500,  410, 670, 210, 405, 200, 370, 710, 370, 350, 180
    ];
    const linedata=[ 380, 650, 420, 650, 380, 240, 220, 500,380, 390, 196, 240];
    
    const data ={
        labels: barlabels,
    
        datasets: [{
    
            data: dataItems,
            backgroundColor: 'rgb(81, 9, 90)', 
            type:'bar',
            order: 1,
           
        },{
            data: linedata,      
            type:'line',
            order: -1,
            backgroundColor: 'rgb(243, 243, 20) ',
            borderColor: 'rgb(243, 243, 50) ',
            yAxisID: 'Donation', 

    
        }]      
    };
    const config ={
        data: data,
        options: {
            scales:{
                y:{
                    title:{
                        display: true,
                        text:'Fee'

                    }
                   
                },
                Donation:{
                    position:'right',
                    title:{
                        display: true,
                        text: 'Donation',
                    }
                }

            },
           
            plugins: {
                legend:{
                    display: false
                },
                title: {
                    display: true,
                    text: ''  
                }
            }               
        }        
    };
    const barchart = new Chart(
        document.getElementById('barchartcanvas'),
        config
    );
    
    
    
    //radar chart
    
    radarlabel =['Jan', 'Feb', 'March', 'April', 'May', 'June']
    const saledata =[1000, 800, 32, 45, 100, 20];
    const incomedata =[20, 30, 34, 5, 20, 85];
    const expensedata =[402, 75, 77, 15, 450, 700];
    
    const radardata ={
        labels: radarlabel,
    
        datasets: [{
            label: ['sales'],
            data: saledata,
            backgroundColor: ['rgb(48, 151, 125)'],
            
        
        },{ label: 'incoome',
            data: linedata,
            backgroundColor: 'blue'
           
           
        },
        {
            label: 'expense',
            data: expensedata,
            backgroundColor: 'yellow',
            order:8            
        }]
        
    };
   
    const configs ={
        data: radardata,
        type: 'radar',
        options: {
            scale: {
                ticks:{
                    max:100,
                }
            },
            plugins: {
                legend:{
                    display: false,
                },
                title: {
                    display: true,
                    text: ''
                }
            }       
        }    
    };
           
    const radarchart = new Chart(
        document.getElementById('canvasRadarchart'),
        configs
    );
    
    
    
    