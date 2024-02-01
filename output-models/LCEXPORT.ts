import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCEXPORTAttributes {
    LID: number;
    STRNAME: string;
    ITYPE: number;
    ISTATUS: number;
    STARTDATE: Date;
}

@Table({
	tableName: "LCEXPORT",
	timestamps: false 
})
export class LCEXPORT extends Model<LCEXPORTAttributes, LCEXPORTAttributes> implements LCEXPORTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	type: DataType.STRING(512) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	ITYPE!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	ISTATUS!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	STARTDATE!: Date;

}