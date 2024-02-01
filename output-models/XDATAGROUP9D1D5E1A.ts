import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XDATAGROUP9D1D5E1AAttributes {
    LUSERIDINSERT?: number;
    REF_F107FEA5?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    LID: number;
    FKSTRID?: string;
}

@Table({
	tableName: "XDATAGROUP9D1D5E1A",
	timestamps: false 
})
export class XDATAGROUP9D1D5E1A extends Model<XDATAGROUP9D1D5E1AAttributes, XDATAGROUP9D1D5E1AAttributes> implements XDATAGROUP9D1D5E1AAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_F107FEA5?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}