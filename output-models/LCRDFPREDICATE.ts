import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCRDFPREDICATEAttributes {
    LID: number;
    STRPREDICATE: string;
}

@Table({
	tableName: "LCRDFPREDICATE",
	timestamps: false 
})
export class LCRDFPREDICATE extends Model<LCRDFPREDICATEAttributes, LCRDFPREDICATEAttributes> implements LCRDFPREDICATEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	type: DataType.STRING(80) 
    })
    	STRPREDICATE!: string;

}