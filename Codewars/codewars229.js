// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

// input
// Two arrays are given :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 × 10−11 N⋅kg−2⋅m2

// 1 ft = 0.3048 m

// 1 lb = 0.453592 kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution



// F = G(m1*m2/r**2)

// convert values to values with proper units for formula...
// will need some conditionals here for this as the units could be one of five for each distance and mass.
// mass = kg
// distance = m
   
    
   
// solution = (arr_val, arr_unit) => {
//     console.log(arr_unit[0],arr_val)
//     const m0 = arr_unit[0]
//     const m1 = arr_unit[1]
//     const r = arr_unit[2]
//    console.log(m0,m1,r)
//    console.log(arr_val)
//     // convertMass0()
//     console.log(arr_unit)
//     // convertMass1()
//     // convertDistance(r)
//     console.log(r, arr_val,"r")
//     console.log(arr_val, "after")
//     console.log((6.67 * 10**-11)*((arr_val[0]*arr_val[1])/arr_val[2]**2))
 
// //   function convertMass0(arr_val,m0){
//     console.log(m0,"m0",arr_val)
//     if(m0 === "kg"){
//         arr_val[0] = arr_val[0]
//     }else if(m0 === "g"){
//         arr_val[0] = arr_val[0] * .001
//     }else if(m0 === "mg"){
//         arr_val[0] = arr_val[0] * 100000
//     }else if(m0 === "μg"){
//         arr_val[0] = arr_val[0] * 1000000000
//     }else if(m0 === "lb"){
//         arr_val[0] = arr_val[0] * 0.453592
//     }
//     // return arr_val
// //   }
// //   function convertMass1(arr_val,m1){
//     if(m1 === "kg"){
//         arr_val[1] = arr_val[1]
//     }else if(m1 === "g"){
//         arr_val[1] = arr_val[1] * .001
//     }else if(m1 === "mg"){
//         arr_val[1] = arr_val[1] * .000001
//     }else if(m1 === "μg"){
//         arr_val[1] = arr_val[1] * .000000001
//     }else if(m1 === "lb"){
//         arr_val[1] = arr_val[1] * 0.453592
//     }
//     // return arr_val
// //   }

// //   function convertDistance(arr_val,r){
//     console.log(r)
//     if(r === "m"){
//         arr_val[2] = arr_val[2]
//     }else if(r === "cm"){
//         arr_val[2] = arr_val[2] * 100
//     }else if(r === "mm"){
//         arr_val[2] = arr_val[2] * 1000
//     }else if(r === "μm"){
//         arr_val[2] = arr_val[2] * 1000000
//     }else if(r === "ft"){
//         arr_val[2] = arr_val[2] * 0.3048
//     }
//     // return arr_val
// //   }
//   return  (6.67 * 10**-11)*((arr_val[0]*arr_val[1])/arr_val[2]**2)
// };
//   console.log(solution([1000, 1000, 100], ["g", "kg", "m"]))

  solution = (arr_val, arr_unit) => {
    
    const m0 = arr_unit[0]
    const m1 = arr_unit[1]
    const r = arr_unit[2]
  
    if(m0 === "kg"){
        arr_val[0] = arr_val[0]
    }else if(m0 === "g"){
        arr_val[0] = arr_val[0] * .001
    }else if(m0 === "mg"){
        arr_val[0] = arr_val[0] * .000001
    }else if(m0 === "μg"){
        arr_val[0] = arr_val[0] * .000000001
    }else if(m0 === "lb"){
        arr_val[0] = arr_val[0] * 0.453592
    }
   
    if(m1 === "kg"){
        arr_val[1] = arr_val[1]
    }else if(m1 === "g"){
        arr_val[1] = arr_val[1] * .001
    }else if(m1 === "mg"){
        arr_val[1] = arr_val[1] * .000001
    }else if(m1 === "μg"){
        arr_val[1] = arr_val[1] * .000000001
    }else if(m1 === "lb"){
        arr_val[1] = arr_val[1] * 0.453592
    }
    
    if(r === "m"){
        arr_val[2] = arr_val[2]
    }else if(r === "cm"){
        arr_val[2] = arr_val[2] * .01
    }else if(r === "mm"){
        arr_val[2] = arr_val[2] * .001
    }else if(r === "μm"){
        arr_val[2] = arr_val[2] * .000001
    }else if(r === "ft"){
        arr_val[2] = arr_val[2] * 0.3048
    }
   
  return  (6.67 * 10**-11)*((arr_val[0]*arr_val[1])/arr_val[2]**2)
};