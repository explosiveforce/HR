export function type(id) {

    if (id === 0) {
        return "犯错";
    }else if(id === 2){
		return "被动调动";
	}else{
		return "主动申请";
	}
}