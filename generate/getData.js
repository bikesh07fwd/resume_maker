// Global Variables
var submit_btn = document.getElementById('submit_btn')
var form_overlay = document.getElementById("form_overlay")

// Global Resume Elements

var res_name = document.getElementById("res_name");
var res_pos = document.getElementById("res_pos");
var res_summary = document.getElementById("res_summary");
var res_dob = document.getElementById("res_dob");
var res_addr = document.getElementById("res_addr");
var res_phone = document.getElementById("res_phone");
var res_email = document.getElementById("res_email");
var res_linked = document.getElementById("res_linked");
var res_cert1_name = document.getElementById("res_cert1_name");
var res_cert1_issuer = document.getElementById("res_cert1_issuer");
var res_cert2_name = document.getElementById("res_cert2_name");
var res_cert2_issuer = document.getElementById("res_cert2_issuer");
var res_p1_name = document.getElementById("res_p1_name");
var res_p1_tech = document.getElementById("res_p1_tech");
var res_p2_name = document.getElementById("res_p2_name");
var res_p2_tech = document.getElementById("res_p2_tech");
var res_exp1_name = document.getElementById("res_exp1_name");
var res_exp1_comp_dur = document.getElementById("res_exp1_comp_dur");
var res_exp2_name = document.getElementById("res_exp2_name");
var res_exp2_comp_dur = document.getElementById("res_exp2_comp_dur");
var res_s1 = document.getElementById("res_s1");
var res_s2 = document.getElementById("res_s2");
var res_s3 = document.getElementById("res_s3");
var res_s4 = document.getElementById("res_s4");




submit_btn.onclick = function(){
    var n = document.getElementById("name_input").value
    var pos = document.getElementById("position_input").value
    var bio = document.getElementById("bio_input").value
    var dob = document.getElementById("dob_input").value
    var addr = document.getElementById("addr_input").value
    var phone = document.getElementById("tel_input").value
    var email = document.getElementById("email_input").value
    var linked = document.getElementById("linkedin_input").value
    var cert1_name = document.getElementById("cert1_name_input").value
    var cert1_issuer = document.getElementById("cert1_issuer_input").value
    var cert2_name = document.getElementById("cert2_name_input").value
    var cert2_issuer = document.getElementById("cert2_issuer_input").value
    var proj1_name = document.getElementById("project1_name_input").value
    var proj1_tech = document.getElementById("project1_tech_input").value
    var proj2_name = document.getElementById("project2_name_input").value
    var proj2_tech = document.getElementById("project1_tech_input").value
    var exp1_pos = document.getElementById("exp1_pos_input").value
    var exp1_comp = document.getElementById("exp1_comp_input").value
    var exp1_dur = document.getElementById("exp1_duration_input").value
    var exp2_pos = document.getElementById("exp2_pos_input").value
    var exp2_comp = document.getElementById("exp2_comp_input").value
    var exp2_dur = document.getElementById("exp2_duration_input").value
    var s1 = document.getElementById("skill1_input").value
    var s2 = document.getElementById("skill2_input").value
    var s3 = document.getElementById("skill3_input").value
    var s4 = document.getElementById("skill4_input").value


    res_name.innerHTML = n;
    res_pos.innerHTML = pos;
    res_summary.innerHTML = bio;
    res_dob.innerHTML = dob;
    res_addr.innerHTML = addr;
    res_phone.innerHTML = phone;
    res_email.innerHTML = email;
    res_linked.innerHTML = linked;
    res_cert1_name.innerHTML = cert1_name;
    res_cert1_issuer.innerHTML = cert1_issuer;
    res_cert2_name.innerHTML = cert2_name;
    res_cert2_issuer.innerHTML = cert2_issuer;
    res_p1_name.innerHTML = proj1_name;
    res_p1_tech.innerHTML = proj1_tech;
    res_p2_name.innerHTML = proj2_name;
    res_p2_tech.innerHTML = proj2_tech;
    res_exp1_name.innerHTML = exp1_pos;
    res_exp1_comp_dur.innerHTML = exp1_comp+" | "+exp1_dur;
    res_exp2_name.innerHTML = exp2_pos;
    res_exp2_comp_dur.innerHTML =exp2_comp+" | "+exp2_dur;
    res_s1.innerHTML = s1;
    res_s2.innerHTML = s2;
    res_s3.innerHTML = s3;
    res_s4.innerHTML = s4;




    form_overlay.style.display = "none";


}

function handleFileSelect(event) {
    const fileInput = event.target;
    const previewImage = document.getElementById('dp');

    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
          previewImage.src = e.target.result;
          console.log(e.target.result)
          previewImage.style.display = 'block';
        };

        reader.readAsDataURL(selectedFile);
      } else {
        alert('Please select a valid image file.');
        fileInput.value = '';
      }
    } else {
      previewImage.style.display = 'none';
    }
  }     


document.getElementById('imgfile_input').addEventListener('change', handleFileSelect);






document.getElementById('download_btn_id').addEventListener('click', function() {
    html2canvas(document.getElementById('resume_main_container_id')).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'resume.png';
        link.click();
    });
});