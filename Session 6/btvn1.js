let string="Quý,Nam,Lan,Hùng,Nam"
let students=string.split(",");
let revStudents=students.reverse();
/* phương thức này làm thay đổi mảng gốc */
    if(students.includes("Lan")){
        console.log("Tên Lan tồn tại trong mảng");
    }else{
        console.log("Tên Lan không tồn tại trong mảng")
    }
    let nameStudent="Nam"
    let index=students.indexOf(nameStudent);
    console.log(`Tên Nam ở vị trí ${index}`);
