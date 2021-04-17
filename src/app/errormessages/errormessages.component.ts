import { Component, OnInit } from '@angular/core';
import { ErrorhandlerService } from '../errorhandler.service';

@Component({
  selector: 'app-errormessages',
  templateUrl: './errormessages.component.html',
  styleUrls: ['./errormessages.component.css']
})
export class ErrormessagesComponent implements OnInit {

  constructor(public errorHandlerService: ErrorhandlerService) { }

  ngOnInit(): void {
  }

}
