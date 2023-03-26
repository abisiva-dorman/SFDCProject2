import { LightningElement ,api} from 'lwc';


export default class RefreshPage extends LightningElement {
  
   // console.log(this.recordId);
    
    updateRecordView() {
        window.location.reload();

    }
}