import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from './hello-world.component';
import { <%- ngModuleName %> } from '../src';

describe('<%- selectorPrefix %>-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [<%- ngModuleName %>.forRoot()]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).toContaine(
      'Hello world from the <%- projectTitle %> module!'
    );
  });
});
