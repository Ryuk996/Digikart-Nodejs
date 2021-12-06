const Payments = require('../Models/payModel')
const Users = require('../Models/userModel')
const Products = require('../Models/productsModel')


const paymentModule = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('firstName userName')
            if(!user) return res.status(400).json({msg: "User does not exist."})
            // console.log(user)
            const {cart, paymentID, address} = req.body;

            const {_id, firstName, userName} = user;

            const newPayment = new Payments({
                user_id: _id, firstName, userName, cart, paymentID, address
            })
            // console.log(newPayment)
            cart.filter(item => { 
                return sold(item._id, item.quantity, item.sold)
            })

            
            await newPayment.save()
            res.json({msg: "Payment Succes!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const sold = async (id, quantity, oldSold) =>{
    await Products.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
    })
}

module.exports = paymentModule