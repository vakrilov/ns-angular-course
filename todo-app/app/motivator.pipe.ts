import { Pipe, PipeTransform } from "@angular/core";

const extensions: Array<[ string, string ]> = [
    [ "Come on, ", " already!" ],
    [ "Fu**ing ", "!" ],
    [ "", " for f**k sake!" ],
    [ "It's time to ", "!" ]];


@Pipe({ name: "motivator" })
export class MotivatorPipe implements PipeTransform {
    transform(value: string, enabled: boolean): string {
        if (!enabled) {
            return value;
        }

        const ext = extensions[ Math.floor(Math.random() * extensions.length) ];

        return ext[0] + value + ext[1];
    }
}