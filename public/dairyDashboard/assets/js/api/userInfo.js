const getUserInfo = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token);

    if(!token){
        window.location.replace("../dairyLogin/");
    }
    else{
        try{
            const response = await fetch("/api/credentials/dairyId", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  token: token,
                }),
              });
            const result = await response.json();
            if(result.code===200)
            {
              console.log(result.data);
              const element = document.getElementById("userName");
              element.innerHTML = "Welcome "+result.data.Fname;
              document.getElementById("dairyName").innerHTML =result.data.dairyName;

              // window.location.replace(`../dairyDashboard/?token=${uid}`);
              document.getElementById("farmerReg").href="../farmerRegister/?token="+token;
              document.getElementById("profile").href="../dairyProfile/?token="+token;
          
            }

        }catch(error){
            console.log(error);
            window.location.replace("../dairyLogin/");
        }
    }
  
  };
  
  export { getUserInfo };