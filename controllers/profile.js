const handProfileGet = (req, res, db) => {
	const {id} = req.params;
	db.select('*').from('users').where({id})
	.then(user => {
		if(user.length){
			res.json(user[0]);
		} else {
			res.status(400).json('no such user');
		}
	})
	.catch(err => res.status(400).json('eror getting user'))
	// if(!found){
	// 	res.status(404).json('no such user');
	// }
}

module.exports = {
	handProfileGet
}