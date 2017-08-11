import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('<%- selectorPrefix %>-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).toContain(
      'Hello world from the <%- projectTitle %> module!'
    );
  });
});
