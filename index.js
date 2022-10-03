const express = require("express");
const app =express();
const port =3000;

app.get("/",(req,res)=>{
    

    var data=[ {"Gender":"Male", "heightCm":171, "WeightKg":96},
    {"Gender":"Male", "heightCm":161, "WeightKg":85 },
    {"Gender":"Male", "heightCm":180, "WeightKg":77 },
    {"Gender":"Female", "heightCm":161, "WeightKg":62 },
    {"Gender":"Female", "heightCm":150, "WeightKg":70 },
    {"Gender":"Female", "heightCm":167, "WeightKg":82 } ]

    const challenge = [[0,18.4],[18.5,24.9],[25,29.9],[30,34.9],[35,39.9],[40]];
    const bmiCategory = ["Underweight","Normal Weight","Overweight","Moderately obese","Severel obese","Very Severely obese"];
    const healthRisk= ["Malnutrition risk","Low risk","Enhances risk","Medium risk","High","Very high risk"];


for(let i=0; i<data.length;i++){
    let bmi= data[i]["WeightKg"]/(data[i]["heightCm"] / 100);
    data[i].bmi=bmi;
    
    for(let j=0;j<challenge.length;j++){
        data[i].healthRisk=healthRisk[j]
      if(bmi>=40){
        data[i].bmiCategory=bmiCategory[j]
      }
      if(bmi>=challenge[j][0]&bmi<=challenge[j][1]){
        data[i].bmiCategory=bmiCategory[j]
      }
      
    }

}

console.log(data)

res.status(200).json({data:data})





})


app.listen(port,()=>{ console.log("server started")})