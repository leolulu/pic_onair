var fs = require('fs')
var express = require('express')
var router = express.Router()
var rimraf = require('rimraf')



router.get('/list',function(req,res){
	fs.readdir('./statics/OneDrive/图片',function(err,files){
		if(err) console.log(err)
			res.render('list.html',{
				file_list:files		
			})
	})
})

router.get('/view',function(req,res){
	console.log(req.query.dirname)
	fs.readdir('./statics/OneDrive/图片/'+req.query.dirname,function(err,files){
		if(err) console.log(err)
			console.log(Date.now().toLocaleString(),files)
		res.render('view.html',{
			dirname:req.query.dirname,
			title:req.query.dirname,
			file_list:files
		})
	})
})

router.get('',function(req,res){
	res.send('use /list')
})

router.get('/del',function(req,res){
	console.log('deleting:',req.query.addr)
	rimraf('./statics/OneDrive/图片/'+req.query.addr, function (err) {
		if(err){console.log(err)}
			else{console.log('删除无异常')}

				fs.readdir('./statics/OneDrive/图片',function(err,files){
					if(err) console.log(err)
						res.render('list.html',{
							file_list:files,
							someinfo:req.query.addr+' deleted.'
						})
				})
			
		})
})

router.get('/test',function(req,res){
	// res.send('send what');
	res.render('test.html')
})


module.exports = router