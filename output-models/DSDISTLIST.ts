import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSDISTLISTAttributes {
    LID: number;
    STRMAIL?: string;
}

@Table({
	tableName: "DSDISTLIST",
	timestamps: false 
})
export class DSDISTLIST extends Model<DSDISTLISTAttributes, DSDISTLISTAttributes> implements DSDISTLISTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STRMAIL?: string;

}