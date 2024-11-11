import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserManagementComponent } from "../user-management/user-management.component";
import { HasRoleDirective } from '../../_directives/has-role.directive';
import { PhotoEditorComponent } from "../../members/photo-editor/photo-editor.component";
import { PhotoManagementComponent } from "../photo-management/photo-management.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [TabsModule, UserManagementComponent, HasRoleDirective, PhotoManagementComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
