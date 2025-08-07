import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class MessageHandlerService {
    constructor(private toastr: ToastrService) { }

    handleError(message: string, error: any): void {
        console.error(message, error);
        this.toastr.error(message);
    }

    handleSuccess(message: string): void {
        this.toastr.success(message);
    }
}