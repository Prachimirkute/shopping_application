import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myImage:string = "assets/images/shopping.jpg";
  //  number =[1,2,3,4,5,6,7,8,9];
  numOdd =[1,3,5,7,9];
  numEven =[2,4,6,8];
  // value=10;
  onlyOdd = false;
  title = 'shopping_app';
  loadFeature = 'sign-up';
  onNavigate(feature: string) {
    this.loadFeature = feature;
  }

  }
  // onclick() {
  //  let  num = 3;
  //   let roman = {
  //     M: 1000,
  //     CM: 900,
  //     D: 500,
  //     CD: 400,
  //     C: 100,
  //     XC: 90,
  //     L: 50,
  //     XL: 40 ,
  //     X: 10,
  //     IX: 9,
  //     V: 5,
  //     IV: 4,
  //     I: 1
  //   };
  //       let tostring =num.toString();
  //       let array=tostring.split('');
  //       let joinp = array.join('');
  //       var arrayLen = Object.keys(roman).length;
  //   for(let i=0;i<=joinp.length;i++){
  //       let splite1 = joinp[i];
  //        for(let j=0;j<=arrayLen;j++){
  //         if(splite1 == Object.keys(roman)[i]){
  //             return roman;
  //         }
  //        }
  //   }
  // }


//    let x = 10;
//     let sign = Math.sign(x);
//     if(sign<0){
//       console.log("false");
//     }else{
//         let tostring =x.toString();
//         let array=tostring.split('');
//         let reverse =array.reverse();
//         let joinp = reverse.join('');
//         let join =parseInt(joinp);
//         if(x==join){
//           console.log("true");
//         }else{
//           console.log("false");
//         }
//     }
   
//   }
// }


//     let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
  // for (let j = 0; j < i; j++) {
  //   string += "*";
  // }  
  // for (let j = 0; j < n - i; j++) {
  //   string += " ";
  // }
  // printing star
//   for (let k = 0; k < i; k++) {
//     string += "#";
//   }
//   string += "\n";
// }
// console.log(string);
    // let arr = [-4, 3, -9, 0, 4, 1];
    // let n=arr.length;
    // let postivesum=0;
    // let negativesum=0;
    // let zerosum=0;
    // for(let i=0;i<n;i++){
    //   let mathsign = Math.sign(arr[i]);
    //   if(mathsign == 1){
    //       postivesum += 1;
    //   }else if (mathsign == -1){
    //       negativesum += 1;
    //   }else{
    //       zerosum += 1;
    //   }
    // }
    // let totalpostivesum = ((postivesum / n ).toFixed(6) + " ");
    // let totalNegativesum = ((negativesum / n ).toFixed(6) + " ");
    // let totalzerosum = ((zerosum / n).toFixed(6) + " ");
    // console.log(totalpostivesum);  
    // console.log(totalNegativesum);  
    // console.log(totalzerosum);  
    // return totalpostivesum;
    // return totalNegativesum;
    // return totalzerosum;
//   }
// }
//   let a = [17, 28, 30];
//   let b = [99, 16, 8];
//   let sum = 0;
//   let sums = 0;
//   let output = [];
//   for(let i=0;i<a.length;i++){
//       for(let j=0;j<b.length;j++){
//           if(a[i]>b[j]){
//                 sums += 1;
//                 i++;
//           }else if(a[i]<b[j]){
//                sum += 1;
//                i++;
//           }else{
//             i++;
//           }
//       }
      
//   }
//   output.push(sums);
//   output.push(sum);
//   console.log(output);               
// }
// }
    // let nums = [3,2,2,3];
    // let numT = [];
    // let val = 3
    // for(let i=0;i<nums.length;i++){
    //   if(nums[i]!=val){
    //     numT.push(nums[i]);
    //   }
    // }
    // let count = 0;
    // Loop through all the elements of the array
    // for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        // if (nums[i] !== val) {
            // nums[count++] = nums[i];
        // }
    // }
    // return count;
    // console.log(count);
  // }
    // let numberA = [];
    // let numberU = [];
    // let numberS = [];
    // for (let i = 0; i < nums.length; i++) {
    //   // let j=1;
    //   for (let j = i + 1; j < nums.length; j++) {
    //     if (nums[i] != nums[j]) {
    //       numberA.push(nums[j])
    //     } else {
    //       numberS.push(nums[j])
    //     }
    //     j++;
    //   }
    // }
    // let numbert = numberS.concat(numberA);
    //  var numbertf = numberS.push(numberU);     
    // console.log(numberS.numbert);
    // console.log(numbert);
  // }

