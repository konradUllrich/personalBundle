import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCRDFAttributes {
    LID: number;
    STRSUBJECT: string;
    LPREDICATE: number;
    STROBJECT: string;
}

@Table({
	tableName: "LCRDF",
	timestamps: false 
})
export class LCRDF extends Model<LCRDFAttributes, LCRDFAttributes> implements LCRDFAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	type: DataType.STRING(350) 
    })
    	STRSUBJECT!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LPREDICATE!: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STROBJECT!: string;

}