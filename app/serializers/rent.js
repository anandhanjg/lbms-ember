import ApplicationSerializer from './application';

export default class RentSerializer extends ApplicationSerializer {
    serialize(){
        let json=super.serialize(...arguments);
        console.log("SERIALIZE");
        console.log(json);

        if(json.borrowDate){
            json.borrowDate=new Date(json.borrowDate);
        }

        if(json.dueDate){
            json.dueDate=new Date(json.dueDate);
        }

        if(json.returnedDate){
            json.returnedDate=new Date(json.returnedDate);
        }
        
        return json;
    }

    normalizeResponse(store,primaryModelClass,payload,id,requestType){
        if(payload.rent){
            if(payload.rent.dueDate)
                payload.rent.dueDate=payload.rent.dueDate.split('T')[0];
            

            if(payload.rent.returnedDate)
                payload.rent.returnedDate=payload.rent.returnedDate.split('T')[0];
            

            if(payload.rent.borrowDate)
                payload.rent.borrowDate=payload.rent.borrowDate.split('T')[0];
            
        }
        return super.normalizeResponse(...arguments);
    }

    normalizeArrayResponse(store,primaryModelClass,payload,id,requestType){
        payload.rents.forEach(p=>{
            if(p.borrowDate)
                p.borrowDate=p.borrowDate.split('T')[0]
            

            if(p.dueDate)
                p.dueDate=p.dueDate.split('T')[0]
            

            if(p.returnedDate)
                p.returnedDate=p.returnedDate.split('T')[0]
            
        });
        return super.normalizeArrayResponse(...arguments);
    }
}
