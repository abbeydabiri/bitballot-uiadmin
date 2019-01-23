<template>
  <section >
      

    <div class="w-100 bg-light-gray pa3 b tracked ttu f6 black mb4">
      <div >
        Dashboard
      </div>
    </div>

    
  </section>
</template>

<script type="text/javascript">

  import {HTTP} from '@/common';
  import menulistComponent from "@/components/dashboard/menulist"
  import tableDisplayComponent from "@/components/dashboard/table"
  import postingStatusComponent from "@/components/postingStatus"

  export default {
    data() {return{
      screen,
      searchRecordParam:"",
      wings: [],
      notifications: [],
    }},
    components: {
      "menulist": menulistComponent,
      "tableDisplay": tableDisplayComponent,
      "posting-status": postingStatusComponent,
    },
    created () {

      // ============ Get Wing Info =============
      // HTTP.post('/api/wings/search', {text: "", field: "", limit: 20, skip: 0}, {withCredentials: true})
      // .then((response) => {
      //   console.log(response.data)
      // })
      // .catch((e) => {
      //   console.log(e)
      // })

      //============= Unmanned Posts =============
      this.wings = [
        {
          Name: 'Hope Wing',
          AttendanceCount: '3000',
          PostingsCount: '3000',
          Divisions: [
            {
              Name: 'Main Bowl',
              AttendanceCount: '3000',
              PostingsCount: '3000',
              Postings: [
            {
              name: 'AHA1',
              isManned: true
            },
            {
              name: 'AHA2',
              isManned: false
            },
            {
              name: 'AHA3',
              isManned: false
            },
            {
              name: 'AHA4',
              isManned: true
            },
            {
              name: 'AHA5',
              isManned: false
            },
            {
              name: 'AHA6',
              isManned: true
            },
            {
              name: 'AHB1',
              isManned: false
            },
            {
              name: 'AHB2',
              isManned: true
            },
            {
              name: 'AHB3',
              isManned: true
            },
            {
              name: 'AHB4',
              isManned: true
            },
            {
              name: 'AHB5',
              isManned: true
            },
            {
              name: 'AHB6',
              isManned: true
            },
            {
              name: 'AHB7',
              isManned: true
            },
            {
              name: 'AHB8',
              isManned: true
            },
            {
              name: 'AHB9',
              isManned: true
            },
            {
              name: 'AHB10',
              isManned: true
            },
            {
              name: 'AHB11',
              isManned: true
            },
            {
              name: 'AHB12',
              isManned: true
            },
            {
              name: 'AHB13',
              isManned: true
            },
            {
              name: 'AHB14',
              isManned: true
            },
          ]
            },
            {
              Name: 'Gallery',
              AttendanceCount: '3000',
              PostingsCount: '3000',
              Postings: [
            {
              name: 'AHA1',
              isManned: true
            },
            {
              name: 'AHA2',
              isManned: false
            },
            {
              name: 'AHA3',
              isManned: false
            },
            {
              name: 'AHA4',
              isManned: true
            },
            {
              name: 'AHA5',
              isManned: false
            },
            {
              name: 'AHA6',
              isManned: true
            },
            {
              name: 'AHB1',
              isManned: false
            },
            {
              name: 'AHB2',
              isManned: true
            },
            {
              name: 'AHB3',
              isManned: true
            },
            {
              name: 'AHB4',
              isManned: true
            },
            {
              name: 'AHB5',
              isManned: true
            },
            {
              name: 'AHB6',
              isManned: true
            },
            {
              name: 'AHB7',
              isManned: true
            },
            {
              name: 'AHB8',
              isManned: true
            },
            {
              name: 'AHB9',
              isManned: true
            },
            {
              name: 'AHB10',
              isManned: true
            },
            {
              name: 'AHB11',
              isManned: true
            },
            {
              name: 'AHB12',
              isManned: true
            },
            {
              name: 'AHB13',
              isManned: true
            },
            {
              name: 'AHB14',
              isManned: true
            },
          ]
            }
          ]
        },
        {
          Name: 'Love Wing',
          AttendanceCount: '3000',
          PostingsCount: '3000',
          Divisions: [
            {
              Name: 'Main Bowl',
              AttendanceCount: '3000',
              PostingsCount: '3000',
              Postings: [
            {
              name: 'ALA1',
              isManned: true
            },
            {
              name: 'ALA2',
              isManned: false
            },
            {
              name: 'ALA3',
              isManned: false
            },
            {
              name: 'ALA4',
              isManned: true
            },
            {
              name: 'ALA5',
              isManned: false
            },
            {
              name: 'translateX6',
              isManned: true
            },
            {
              name: 'ALB1',
              isManned: false
            },
            {
              name: 'ALB2',
              isManned: true
            },
            {
              name: 'ALB3',
              isManned: true
            },
            {
              name: 'ALB4',
              isManned: true
            },
            {
              name: 'ALB5',
              isManned: true
            },
            {
              name: 'ALB6',
              isManned: true
            },
            {
              name: 'ALB7',
              isManned: true
            },
            {
              name: 'ALB8',
              isManned: true
            },
            {
              name: 'ALB9',
              isManned: true
            },
            {
              name: 'ALB10',
              isManned: true
            },
            {
              name: 'ALB11',
              isManned: true
            },
            {
              name: 'ALB12',
              isManned: true
            },
            {
              name: 'ALB13',
              isManned: true
            },
            {
              name: 'ALB14',
              isManned: true
            },
          ]
            },
            {
              Name: 'Gallery',
              AttendanceCount: '3000',
              PostingsCount: '3000',
              Postings: [
                          {
                            name: 'LGL1',
                            isManned: true
                          },
                          {
                            name: 'LGL2',
                            isManned: false
                          },
                          {
                            name: 'LGL3',
                            isManned: true
                          },
                          {
                            name: 'LGL4',
                            isManned: true
                          },
                          {
                            name: 'LGL5',
                            isManned: false
                          },
                          {
                            name: 'LGL6',
                            isManned: true
                          },
                          {
                            name: 'LGL7',
                            isManned: false
                          }
                        ]
            }
          ]
        }
      ]

    }
  }

</script>
