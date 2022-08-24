const { network } = require("hardhat");

const devlopmentsChains = ["localhost","hardhat"];
module.exports = async ({getNamedAccounts,deployments}) =>{
    const {deploy,log} = deployments;
    const{deployer} = await getNamedAccounts();

    if(devlopmentsChains.includes(network.name)){
        const Ballot = deploy("Ballot",{
            from : deployer,
            log : true,
            args:[]
        })
    }
    log("______________Deployed SucessFully_____________");

    if(!devlopmentsChains.includes(network.name)){
        console.log("Can go for verfiy");
    }
    
}

module.exports.tags = ["all","Ballot"];