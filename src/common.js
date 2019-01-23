import axios from 'axios';

export const HTTP = axios.create({
  baseURL: ``,
  baseURL: `http://localhost:5353`,
  //baseURL: `http://192.168.8.198:5151`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})


export function checkRedirect(respData) {
  if (respData.Body !== null) {
    if (respData.Body.Redirect !== null && respData.Body.Redirect !== undefined && respData.Body.Redirect !== "") {
      window.location.href = '/#'+respData.Body.Redirect
    }
  }
}

export function checkPermissions() {
  HTTP.get('/api/permissions', {
    withCredentials: true
  }).then((response) => {
    checkRedirect(response.data)
  }).catch((e) => {
    if (window.location.hash !== "#/") {
      window.location.href = '/'
    }
  })
}

export function dayofWeek() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[d.getDay()]
}

export function humanTime(time) {
  if (time == undefined) {
    return
  }

  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original

  // if (curTime == null || curTime == "") {
  //   return ""
  // }

  // var curHour = parseInt(curTime.slice(0, 2))
  // var curHourHalf = curHour / 12
  // var newTime = curHourHalf + ":" + curTime.slice(3, 5); 
  
  // (curHour < 12) ? newTime += " AM" : newTime += " PM"
  // return newTime
}

export function displayImage(event, app, field ) {
  var reader = new FileReader();
  var selectedFile = event.target.files[0];
  event.target.value = '';
  reader.readAsDataURL(selectedFile);
  reader.onload = function () {
    if (selectedFile.size > 10240000) {
      app.notifications.push({
        Code: 0,
        Message: "Image File must be less than 10MB"
      })
    } else {
      switch (selectedFile.type) {
        case "image/gif":
        case "image/png":
        case "image/jpg":
        case "image/jpeg":
          app.record[field] = reader.result;
          break;

        default:
          app.notifications.push({
            Code: 0,
            Message: "File Must be a valid Image"
          })
          break
      }
    }
  };
  reader.onerror = function (error) {
    app.notifications.push({Code:0,Message:"Image Error:"+error})
  };
}


export function uploadFile(event, app, field) {
  var reader = new FileReader();
  var selectedFile = event.target.files[0];
  event.target.value = '';
  reader.readAsDataURL(selectedFile);
  reader.onload = function () {
    if (selectedFile.size > 10240000) {
      app.notifications.push({
        Code: 0,
        Message: "File must be less than 10MB"
      })
    } else {
      switch (selectedFile.type) {
        case "text/csv":
        case "application/csv":
        case "application/json":
          app.record[field] = reader.result;
          break;

        default:
          app.notifications.push({
            Code: 0,
            Message: "File Must be a JSON or CSV"
          })
          break
      }
    }
  };
  reader.onerror = function (error) {
    app.notifications.push({
      Code: 0,
      Message: "Image Error:" + error
    })
  };
}
