
/**
 * @param {Object} data The Diary Registration form data
 * @returns {Promise<string>} JSON
 */


export function trailuserReg(data){
    sendToAPI(data);
}

async function sendToAPI(info)
{
    const arg = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      };

      try{
          const response = await fetch("/api/user/reg",arg);
          const result = response.json();
          console.log(result);

      }catch(error){
          console.log(error);

      }
}