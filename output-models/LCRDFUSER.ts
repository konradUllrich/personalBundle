import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCRDFUSERAttributes {
    LRDFID: number;
    LUSERID: number;
}

@Table({
	tableName: "LCRDFUSER",
	timestamps: false 
})
export class LCRDFUSER extends Model<LCRDFUSERAttributes, LCRDFUSERAttributes> implements LCRDFUSERAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LRDFID!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LUSERID!: number;

}