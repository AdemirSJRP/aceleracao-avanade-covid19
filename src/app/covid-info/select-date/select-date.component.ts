import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cov-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.scss']
})
export class SelectDateComponent implements OnInit {

  form: FormGroup;

  @Input() date: Date;

  @Output() dateChanged: EventEmitter<Date> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      dateInput: new FormControl(this.date, [Validators.required])
    });
  }

  onDateSelected() {
    this.dateChanged.emit(this.form.get('dateInput').value);
  }

}
