import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP54E9853FAttributes {
    LUSERID?: number;
    LORDER?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STRMETA?: string;
    STRCONTENTTYPE?: string;
    FKSTRID?: string;
    DTLASTMODIFY?: Date;
    LID: number;
    STRFILENAME?: string;
    STRURL?: string;
    DTEDIT?: Date;
}

@Table({
	tableName: "XFILEDATAGROUP54E9853F",
	timestamps: false 
})
export class XFILEDATAGROUP54E9853F extends Model<XFILEDATAGROUP54E9853FAttributes, XFILEDATAGROUP54E9853FAttributes> implements XFILEDATAGROUP54E9853FAttributes {

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

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}