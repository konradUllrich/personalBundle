import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMAINPORTALAttributes {
    GUIDPORTAL: string;
    STRNAME: string;
    BDELETEABLE: boolean;
}

@Table({
	tableName: "LCMAINPORTAL",
	timestamps: false 
})
export class LCMAINPORTAL extends Model<LCMAINPORTALAttributes, LCMAINPORTALAttributes> implements LCMAINPORTALAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTAL!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.STRING 
    })
    	BDELETEABLE!: boolean;

}