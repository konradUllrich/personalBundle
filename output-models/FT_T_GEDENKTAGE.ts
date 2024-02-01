import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface FT_T_GEDENKTAGEAttributes {
    L_JAHR?: number;
    LUSERID?: number;
    DTINSERT?: Date;
    STR_GEDENKTAG?: string;
    STRID: string;
    DTEDIT?: Date;
    DT_DATUM?: Date;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "FT_T_GEDENKTAGE",
	timestamps: false 
})
export class FT_T_GEDENKTAGE extends Model<FT_T_GEDENKTAGEAttributes, FT_T_GEDENKTAGEAttributes> implements FT_T_GEDENKTAGEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

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
    	type: DataType.STRING(255) 
    })
    	STR_GEDENKTAG?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}