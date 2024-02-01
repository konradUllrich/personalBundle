import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP79A09DA0Attributes {
    FKSTRID?: string;
    LID: number;
    LUSERIDINSERT?: number;
    STRFILENAME?: string;
    DTLASTMODIFY?: Date;
    DTINSERT?: Date;
    STRCONTENTTYPE?: string;
    STRURL?: string;
    STRMETA?: string;
    DTEDIT?: Date;
    LUSERID?: number;
    LORDER?: number;
}

@Table({
	tableName: "XFILEDATAGROUP79A09DA0",
	timestamps: false 
})
export class XFILEDATAGROUP79A09DA0 extends Model<XFILEDATAGROUP79A09DA0Attributes, XFILEDATAGROUP79A09DA0Attributes> implements XFILEDATAGROUP79A09DA0Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

}