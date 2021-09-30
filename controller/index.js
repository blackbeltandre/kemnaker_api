var os = require('os');
var path = require('path');
const connection = require('../config/config')    
require('dotenv').config();

        function Capitalize(str)
        {  return str.replace (/\w\S*/g, 
              function(txt)
        {  
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); } );
        }
        exports.page_not_found=function(req,res){
        res.status(200).json({"title":'Web Not Found',"message":"You dont have any permission to access this page"});
        console.log({"title":'Web Not Found',"message":"You dont have any permission to access this page"});
        }
        //save
        exports.save_data=function(req,res){
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            var date_post = dateTime;
            const pengirim = req.body.pengirim
            const email = req.body.email
            const subject = req.body.subject
            const pesan = req.body.pesan
            var values = [Capitalize(pengirim),email,subject,pesan,date_post];
            connection.query('insert into master_bukutamu (pengirim,email,subject,pesan,date_post) values($1,$2,$3,$4,$5)',values,(error,update)=>{
             if (error) {
            throw error
             res.status(500).json({"status":'Error',"message":"Silahkan lengkapi semua fild."});
                console.log({"status":'Error',"message":"Silahkan lengkapi semua fild."});
                  } 
                else {
               res.status(200).json({"status":'Sukses',"message":"Data Berhasil Disimpan."});
             console.log({"status":'Sukses',"message":"Data Berhasil Disimpan."});
                  }
                  }
                )
            };
              exports.get_all_data=function(req,res){
                const limit = 3
                  const page = req.query.page || 1;
                  const offset = (page - 1) * limit
                  var query = connection.query('SELECT COUNT(*) as totalcount FROM master_bukutamu', function(error, data_bukutamu, fields) {
                      if (error) {
                          throw error
                        }
                        paginationFor = 'bukutamu/index';
                       totalcount = data_bukutamu.rows[0].totalcount;
                        connection.query('SELECT * FROM master_bukutamu order by id_bukutamu desc LIMIT '+limit+' OFFSET '+offset,(error,data_bukutamu,fields)=>{
                        if (error) {
                              throw error
                        }
                        const totalPage = Math.ceil(totalcount / limit);
                        const pagination = { totalPage: totalPage, currentPage: page };       
                    if(data_bukutamu.rows.length != 0){
                    res.status(200).json({"status":"Sukses","message":"Berhasil menampilkan data",page_number:page,total:data_bukutamu.rows.length,
                                totalcount:totalcount,pagination: pagination,offset:offset,paginationFor,"data":data_bukutamu.rows});
                     console.log({"data":data_bukutamu.rows});   
                    }
                    else if(data_bukutamu.rows.length == 0){
                    res.status(200).json({"status":'Sukses',"message":"Tidak ada data untuk ditampilkan."});
                  console.log({"status":'Sukses',"message":"Tidak ada data untuk ditampilkan."});
                } else {
                  res.status(500).json({"status":'Error',"message":"Ada kesalahan di server"}); 
                  console.log({"status":"Error","message":"Ada kesalahan di server"});
                } 
            });
        });  
        }                      
        
        //update
         exports.update_data= function (req,res){
                var id_bukutamu = parseInt(req.params.id_bukutamu);
                var values = [Capitalize(req.body.pengirim),req.body.email,req.body.subject,req.body.pesan,req.params.id_bukutamu];
                connection.query( 'update master_bukutamu set pengirim = $1 ,email = $2 ,subject =$3 ,pesan =$4 WHERE id_bukutamu = $5', values,
                (error, results) => {
            if (error) {
            throw error
               res.status(500).json({"status":"Error","message":"Gagal mengubah data"});
                     console.log({"status":"error","Error":"Gagal mengubah data"});
            }   
            else{
              res.status(200).json({"status":"Sukses","message":"Berhasil mengubah data"});
                     console.log({"status":"Sukses","message":"Berhasil mengubah data"});   
          }
        })
        }
            
        //delete  
        exports.delete_data=function(req,res){
          var id_bukutamu = req.params.id_bukutamu;
          connection.query('delete from master_bukutamu where id_bukutamu = $1', [id_bukutamu],(error, results) => {
           if (error) {
            throw error
               res.status(500).json({"status":"Error","message":"Gagal menghapus data"});
                     console.log({"status":"error","Error":"Gagal menghapus data"});
            }   
            else{
              res.status(200).json({"status":"Sukses","message":"Berhasil menghapus data"});
                     console.log({"status":"Sukses","message":"Berhasil menghapus data"});   
          }
        })
        }




