import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XDATAGROUP931228FDAttributes {
    FKSTRID?: string;
    DTEDIT?: Date;
    REF_4DFD1FEA?: string;
    STRID: string;
    DTINSERT?: Date;
    LUSERID?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "XDATAGROUP931228FD",
	timestamps: false 
})
export class XDATAGROUP931228FD extends Model<XDATAGROUP931228FDAttributes, XDATAGROUP931228FDAttributes> implements XDATAGROUP931228FDAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_4DFD1FEA?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}