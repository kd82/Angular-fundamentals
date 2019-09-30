import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISession, restrictedWords } from "src/app/shared";

@Component({
  selector: "create-session",
  templateUrl: "./create-session.component.html",
  styleUrls: ["./create-session.component.css"],
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateSessionComponent implements OnInit {
  newSessioForm: FormGroup;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  constructor() {}
  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(["foo", "bar"])
    ]);
    this.newSessioForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues: any) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
